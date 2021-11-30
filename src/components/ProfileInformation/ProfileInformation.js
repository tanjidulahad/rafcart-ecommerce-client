import React from 'react';
import useAuth from '../../context/useAuth/useAuth';

const ProfileInformation = () => {
    const {user}=useAuth();
    const fullName=user.displayName;
    const splittedName=fullName.split(" ");
    console.log(splittedName);
    return (
        <div class="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
            <form action="">
                <h3 class="text-lg font-medium capitalize mb-4">
                    Profile Information
                </h3>
                <div class="space-y-4">
                    <div class="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                First Name
                            </label>
                            <input type="text" class="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" defaultValue={splittedName[0]}/>
                        </div>
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                Last Name
                            </label>
                            <input type="text" class="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" defaultValue={splittedName[1]}/>
                        </div>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                Birthday
                            </label>
                            <input type="date" class="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary"/>
                        </div>
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                Gender
                            </label>
                            <select class="input-box border border-gray-400 focus:outline-none focus:border-primary">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                Email Address
                            </label>
                            <input type="text" class="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" defaultValue={user.email}/>
                        </div>
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                Phone Number
                            </label>
                            <input type="text" class="block w-full input-box border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:outline-none focus:border-primary" defaultValue="+123 456 789"/>
                        </div>
                    </div>
                </div>
                <div class="mt-6">
                    <button type="submit"
                        class="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                        Save change
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileInformation;