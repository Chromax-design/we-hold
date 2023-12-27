import React, { useEffect, useState } from "react";
import noMentor from "/info_graphics/no-mentor.svg";
import axios from "axios";
import { BASE_URL } from "../../../config/config";
import useAuth from "../../../store/AuthStore";

const NoPayment = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <img src={noMentor} alt="" className="max-w-[350px]" />
        <h2 className="capitalize text-sm">You have made no payments yet</h2>
      </div>
    </>
  );
};

const MenteePayments = () => {
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);
  const url = `${BASE_URL}/mentee/payments/${user.id}`;
  const getPayment = async () => {
    const { data } = await axios.get(url);
    setPayments(data.payment);
  };
  useEffect(() => {
    getPayment();
  }, []);

  const createDate = (timestamp, timeZone = "UTC") => {
    if (timestamp < 1e12) {
      timestamp *= 1000;
    }
  
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const date = new Date(timestamp);
    const options = { year: "numeric", month: "short", day: "numeric", timeZone };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <main className="bg-gray-50 p-4">
      <section className="max-w-6xl mx-auto sm:px-4 sm:py-7 ">
        <div className="max-w-5xl mx-auto">
          <div className=" col-span-9 bg-white rounded-md shadow-md relative h-[650px]">
            <div className="p-5 space-y-4">
              <h1 className="capitalize text-2xl font-medium">
                my payments
              </h1>
              {payments.length == 0 ? (
                <NoPayment />
              ) : (
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                          Payment Id
                        </th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                          Amount Paid
                        </th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                          Payment Status
                        </th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                          Mentors Name
                        </th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                          Date Of Subscription
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {payments.map((payment, index) => {
                        return (
                          <tr className="bg-white border-b" key={index}>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              {payment.payment_Id}
                            </th>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              ${payment.amount}
                            </th>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              {payment.payment_status}
                            </th>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              {`${payment.firstName} ${payment.initials}`}
                            </th>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              {createDate(payment.subscribed_at)}
                            </th>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MenteePayments;
